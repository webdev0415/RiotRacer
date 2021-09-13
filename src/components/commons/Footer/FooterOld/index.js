import React from "react"
import { useDispatch } from "react-redux"
import { openModalAction } from "store/modal/actions"
import { Link } from "react-router-dom"
import Car from "assets/images/Footer_Car.png"
import Twitter from "assets/icons/Twitter.png"
import OpenSea from "assets/icons/opensea.png"
import MediumIcon from "assets/icons/medium.png"
import DiscordIcon from "assets/icons/discord.png"
import RioTextButton from "../../Button"

import "./styles.scss"

function Footer() {
  const dispatch = useDispatch()

  const handleStart = () => {
    dispatch(openModalAction("authModal", 2))
  }

  return (
    <div className="footer_banner">
      <div className="top_footer flex_row">
        <img src={Car} alt="CAR" className="car_img" />
        <div className="flex actions_banner">
          <div className="actions">
            <div className="action_title">Create your free garage</div>
            <div className="action_sub_title">
              Lorem ipsum dolor sit amet, conse
            </div>
          </div>
          <RioTextButton className="hide" onClick={handleStart}>
            START
          </RioTextButton>
        </div>
      </div>

      <div className="bottom_footer">
        <div className="inner_footer_banner flex_row">
          <div className="flex f_items_banner mb-15 mb-md-0">
            <div className="f_item">
              <a
                href="https://whitepaper.riot.fun/"
                target="_blank"
                rel="noreferrer"
              >
                White Paper
              </a>
            </div>
            <div className="f_item">
              <Link to="/">Support</Link>
            </div>
            <div className="f_item">
              <Link to="/">Terms & Conditions</Link>
            </div>
          </div>
          <div className="flex f_social_icon_banner">
            <a
              href="https://twitter.com/RiotRacers"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="f_social_icon"
                src={Twitter}
                alt="twitter button"
              />
            </a>
            <a
              href="https://opensea.io/collection/riot-racers-cars"
              rel="noreferrer"
            >
              <img
                className="f_social_icon"
                src={OpenSea}
                alt="OpenSea button"
              />
            </a>
            <Link to="/">
              <img
                className="f_social_icon"
                src={MediumIcon}
                alt="Medium button"
              />
            </Link>
            <a href="https://discord.gg/riotracers" rel="noreferrer">
              <img
                className="f_social_icon"
                src={DiscordIcon}
                alt="Discord button"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
