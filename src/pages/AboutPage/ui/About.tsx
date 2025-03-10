import {useTranslation} from "react-i18next"

const About = () => {
    const {t} = useTranslation('about')
    return(
        <div data-testId = "about">
            {t('about')}
        </div>
    )
}
export default About;