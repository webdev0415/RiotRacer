import React from "react"
import { useTranslation } from "react-i18next"
import RioCard from "./RioCard"
import MediaPlayer from "../Media"
import RioTextButton from "../Button/TextButton"
import GeneralButton from "../Button"

const CarCard = ({
  playing = false,
  item,
  onChange,
  onShowDetail,
  onSelect,
  selected,
  extraRender,
}) => {
  const { t } = useTranslation()
  const showAcionBar = !!onChange || !!onShowDetail || !!onSelect

  return (
    <RioCard>
      {selected && <div className="SelectedCarBar">{t("car.selectedCar")}</div>}
      <div className="RioCarCardContent">
        <MediaPlayer
          url={item?.animation_url}
          previewUrl={item?.image}
          playing={playing}
        />
        {extraRender && extraRender}
      </div>
      {showAcionBar && (
        <div className="RioCarActions">
          {onChange && (
            <RioTextButton text={t("car.changeCar")} onClick={onChange} />
          )}
          {onShowDetail && (
            <RioTextButton text={t("car.showDetails")} onClick={onShowDetail} />
          )}
          {onSelect && (
            <GeneralButton onClick={onSelect} disabled={selected} size="small">
              {selected ? t("selected") : t("select")}
            </GeneralButton>
          )}
        </div>
      )}
    </RioCard>
  )
}

export default CarCard
