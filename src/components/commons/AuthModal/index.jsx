import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { modalStateSelector } from "store/modal/selectors"
import { closeModalAction } from "store/modal/actions"
import { authStateSelector } from "store/auth/selectors"
import { logoutAction } from "store/auth/actions"

import useWindowDimensions from "hooks/useWindowDimensions"
import RioModal from "components/commons/Modal"
import ModalContent from "./ModalContent"
import ModalTitle from "./ModalTitle"
import Loader from "./Loader"
import { MEDIUM_MOBILE } from "constants/breakPoints"

import "./styles.scss"

function AuthModal() {
  const dispatch = useDispatch()
  const modalState = useSelector(modalStateSelector)
  const { isLoggedIn } = useSelector(authStateSelector)
  const { width: windowWidth } = useWindowDimensions()

  const [step, setStep] = useState(2)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (modalState.step) {
      setStep(modalState.step)
    }
  }, [modalState])

  const onClose = () => {
    if (!isLoggedIn) {
      dispatch(logoutAction())
    }
    dispatch(closeModalAction())
  }

  const backScreen = () => {
    setStep(step - 1)
  }

  const isFullModal = windowWidth <= MEDIUM_MOBILE && step === 7

  return (
    <RioModal
      closable={false}
      onCancel={onClose}
      title={!loading && step === 3 && <ModalTitle goBack={backScreen} />}
      width="600px"
      height="520px"
      className="auth_modal"
      isFull={isFullModal}
      hideClose={step === 7}
      visible={modalState.isOpen}
    >
      {loading ? (
        <Loader />
      ) : (
        <ModalContent
          step={step}
          setStep={setStep}
          setLoading={setLoading}
          onClose={onClose}
        />
      )}
    </RioModal>
  )
}

export default AuthModal
