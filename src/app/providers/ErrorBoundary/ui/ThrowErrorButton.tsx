import {CustomButton} from "shared/ui/CustomButton/CustomButton";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";


export const ThrowErrorButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => {
        setError(true);
    }

    useEffect(() => {
        if(error){
            throw new Error
        }
    }, [error]);

    const {t} = useTranslation();

    return (
      <CustomButton onClick={onThrow}>
          {t('Выбросить ошибку')}
      </CustomButton>
    )
}