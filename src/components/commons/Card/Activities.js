import React, { useMemo } from "react"
import { useTranslation } from "react-i18next"
import RioCard from "./RioCard"
import RioTextButton from "../Button/TextButton"
import Spinner from "../Spinner"

const Item = ({ entity }) => {
  const { t, i18n } = useTranslation()
  const desc = useMemo(() => {
    switch (entity.logType) {
      case "registered":
        return t("activityTypes.registered")
      case "login":
        return t("activityTypes.login")
      default:
        return null
    }
  }, [entity, i18n.language])

  return (
    <div className="activityRow">
      <div className="activityType">
        <div className="subtitle2 description">{desc}</div>
        <div className="subtitle2 dateTime">
          {i18n.format(entity.createdAt, "MMMM DD, HH:mm a", i18n.language)}
        </div>
      </div>
    </div>
  )
}

const ActivitiesCard = ({ activities, onViewMore, loading }) => {
  const { t } = useTranslation()
  const showAcionBar = !!onViewMore

  return (
    <RioCard onViewMore={onViewMore} className="UserActivityCard">
      {loading && <Spinner />}
      <div className="UserActivities">
        <ul>
          {activities.map((item) => (
            <li key={item.id}>
              <Item entity={item} />
            </li>
          ))}
        </ul>
        {showAcionBar && (
          <div className="RioCarActions">
            <RioTextButton text={t("viewMore")} onClick={onViewMore} />
          </div>
        )}
      </div>
    </RioCard>
  )
}

export default ActivitiesCard
