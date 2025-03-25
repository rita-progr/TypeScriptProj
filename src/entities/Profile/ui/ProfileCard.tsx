import cls from './ProfileCard.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Text, TextAlign, TextTheme} from 'shared/ui/Text/Text';
import {Input} from "shared/ui/Input/Input";
import {Loader} from "shared/ui/Loader/Loader";
import {Profile} from "entities/Profile";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Currency, CurrencySelect} from "entities/Currency";

import {Country, CountrySelector} from "entities/Country";

interface ProfileCardProps{
    className?: string;
    isLoading?: boolean;
    error?: string;
    data?:Profile;
    readOnly?: boolean;
    onChangeFirstname?: (value:string) => void;
    onChangeLastname?: (value:string) => void;
    onChangeAge?: (value:string) => void;
    onChangeCity?: (value:string) => void;
    onChangeAvatar?: (value:string) => void;
    onChangeCurrency?: (value:Currency) => void;
    onChangeCountry?: (value:Country) => void;
}

export const ProfileCard = (props:ProfileCardProps) => {

    const {t} = useTranslation('profile');
const {
    className,
    onChangeFirstname,
    onChangeAge,
    onChangeCity,
    onChangeLastname,
    onChangeCountry,
    onChangeAvatar,
    onChangeCurrency,
    isLoading,
    readOnly,
    error,
    data
} = props;

    if(isLoading){
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                    <Loader/>
            </div>
        )
    }

    if(error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                    <Text title={'Произошла ошибка'} theme={TextTheme.ERROR} align={TextAlign.CENTER}/>
                    <Text text={'Поажлуйста, перезагрузите старницу'}  theme={TextTheme.ERROR} align={TextAlign.CENTER}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            {data?.avatar && (
                <div className={cls.avatar}>
                    <Avatar img={data?.avatar} alt={'аватар'}/>
                </div>
            )}
            <Input
                readOnly={readOnly}
                onChange={onChangeFirstname}
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}/>
                <Input
                    readOnly={readOnly}
                    onChange={onChangeLastname}
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}/>
                <Input
                    readOnly={readOnly}
                    onChange={onChangeAge}
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}/>
                <Input
                    readOnly={readOnly}
                    onChange={onChangeCity}
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    className={cls.input}/>
                <Input
                    readOnly={readOnly}
                    onChange={onChangeAvatar}
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={cls.input}/>
                 <CurrencySelect value={data?.currency} onChange={onChangeCurrency}/>
                <CountrySelector value = {data?.country} onChange={onChangeCountry}/>

        </div>
    )
}