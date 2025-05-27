import cls from './AdminPanelPage.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = ({className}: AdminPanelPageProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.AdminPanelPage, {}, [className])}>
            {t('дамин панель')}
        </div>
    )
}

export default AdminPanelPage;