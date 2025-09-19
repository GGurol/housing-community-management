import { useTranslation } from "react-i18next"; // 1. ADDED: The missing import for the 't' function

interface UserPanelCardProps {
  name: string,
  meterReading?: number,
  price?: number
}

const UserPanelCard = ({ name, meterReading, price }: UserPanelCardProps) => {
  const { t } = useTranslation(); // This line now works correctly

  return (
    <div className="relative cursor-pointer">
      <div
        className="relative p-6 bg-bkg border-2 border-textContent rounded-lg hover:scale-105 transition duration-500 flex flex-col">
        <div className="flex-row items-center">
          <h3 className="my-2 text-lg font-bold text-textTitle">{name}</h3>
        </div>
        
        {/* 2. CORRECTED: JSX formatting with template literals */}
        <p className="text-textContent">
          {`${t('meterReadingLabel')}: ${meterReading ? meterReading : t('noData')}`}
        </p>
        <p className="text-textContent">
          {`${t('estimatedFeeLabel')}: ${meterReading && price ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(meterReading * price) : t('noData')}`}
        </p>

      </div>
    </div>
  );
};

export default UserPanelCard;