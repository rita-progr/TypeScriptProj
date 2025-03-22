import cls from './ProfileCard.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useSelector} from "react-redux";
import {getProfileData} from "../model/selectors/getProfileData/getProfileData";
import {getProfileError} from "../model/selectors/getProfileError/getProfileError";
import {getProfileLoading} from "../model/selectors/getProfileLoading/getProfileLoading";
import {useTranslation} from "react-i18next";
import {Text} from 'shared/ui/Text/Text';
import {CustomButton} from "shared/ui/CustomButton/CustomButton";
import {Input} from "shared/ui/Input/Input";

interface ProfileCardProps{
    className?: string;
}

export const ProfileCard = ({className}:ProfileCardProps) => {

    const {t} = useTranslation('profile');

    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const loading = useSelector(getProfileLoading);

    return (
        <div className={classNames(cls.ProfileCard, {},[className])}>
            <div>
                <Text title={t('Профиль')}/>
                <CustomButton>
                    {t('Редактировать')}
                </CustomButton>
            </div>
          <div>
              <Input
              value={data?.first}
              placeholder={t('Ваше имя')}
              className={cls.input}/>
              <Input
                  value={data?.lastname}
                  placeholder={t('Ваша фамилия')}
              className={cls.input}/>
          </div>
        </div>
    )
}