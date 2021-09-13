import React, { useMemo, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { getProfilePictureSelector } from "store/auth/selectors"
import { updateUserAction } from "store/auth/actions"
import useWindowDimensions from "hooks/useWindowDimensions"
import { MEDIUM_MOBILE } from "constants/breakPoints"
import RioModal from "components/commons/Modal"
import TextButton from "components/commons/Button/TextButton"
import RioButton from "components/commons/Button"
import notify from "components/commons/notification"
import { uploadFileApi } from "api/media"

const PhotoEdit = ({ imageUri, onCancel }) => {
  const { t } = useTranslation()
  const fileInput = useRef()
  const pictureRef = useRef()
  const dispatch = useDispatch()
  const [selected, setSelected] = useState()

  const previewUrl = useMemo(() => {
    if (!selected) {
      return imageUri
    }
    return URL.createObjectURL(selected)
  }, [imageUri, selected])

  const handleChangePhoto = (e) => {
    const [file] = e.target.files
    if (file) {
      setSelected(file)
    }
  }

  const openFilePicker = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }

  const handleClick = async () => {
    if (!selected) {
      openFilePicker()
    } else {
      try {
        const {
          data: { assetId },
        } = await uploadFileApi(selected)
        dispatch(updateUserAction({ picture: assetId, cb: onCancel }))
      } catch (error) {
        notify({
          title: "Failed to upload file",
          desc: error?.response?.data?.error,
        })
      }
    }
  }

  return (
    <>
      <div className="ImagePreview">
        <div className="ImagePreviewInner">
          <img src={previewUrl} alt="" ref={pictureRef} />
          <input
            type="file"
            name="avatar"
            ref={fileInput}
            accept="image/*"
            onChange={handleChangePhoto}
          />
        </div>
      </div>
      {selected && (
        <TextButton
          hideIcon
          onClick={openFilePicker}
          text={t("chooseAnotherPhoto")}
        />
      )}
      <RioButton onClick={handleClick}>
        {selected ? t("settings.saveImage") : t("settings.uploadPhoto")}
      </RioButton>
    </>
  )
}

const UserPicture = () => {
  const { t } = useTranslation()
  const { width } = useWindowDimensions()
  const userPic = useSelector(getProfilePictureSelector)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = width <= MEDIUM_MOBILE

  return (
    <div className="UserPictureContainer">
      <div className="ImageWrapper">
        <img src={userPic} alt="" />
      </div>
      <TextButton
        hideIcon
        text={t("changeAvatar")}
        onClick={() => setIsOpen(true)}
      />
      <RioModal
        visible={isOpen}
        isFull={isMobile}
        className="PhotoEditModal"
        onCancel={() => setIsOpen(false)}
      >
        <PhotoEdit imageUri={userPic} onCancel={() => setIsOpen(false)} />
      </RioModal>
    </div>
  )
}

export default UserPicture
