import React from "react";
import { Footer } from "../components/Footer";
import { useAccountStatementData } from "../hooks/useAccountStatementData";
import { LoadingSpinner } from "../components/LoadingSpinner";
import styles from "./AccountStatement.module.css";
import { CreditorArrangementsResponsive } from "../components/CreditorArrangements/CreditorArrangementsResponsive";
import { HeaderResponsive } from "../components/Header/HeaderResponsive";
import { DebtProgressResponsive } from "../components/DebtProgress/DebtProgressResponsive";
import { TransactionTableResponsive } from "../components/TransactionTable/TransactionTableResponsive";

const AccountStatement: React.FC = () => {
  const {
    data: accountStatementData,
    isLoading,
    isError,
    isSuccess,
  } = useAccountStatementData();

  return (
    <div className={`${styles.backgroundColor}`}>
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <h1>Error</h1>
      ) : (
        isSuccess && (
          <div className="puppeteer-capture p-4">
            <div className="max-w-6xl mx-auto space-y-3">
              <HeaderResponsive {...accountStatementData} />
              <DebtProgressResponsive {...accountStatementData} />
              <CreditorArrangementsResponsive {...accountStatementData} />
              <TransactionTableResponsive
                {...accountStatementData.transactionData}
              />
              <Footer />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default AccountStatement;
