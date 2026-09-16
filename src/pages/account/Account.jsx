import "./Account.css";
import AccountHeader from "../../components/accountHeader/AccountHeader";
import AccountMain from "../../components/accountMain/AccountMain";

function Account() {
  return (
    <div>
      <section className="w-full h-auto min-h-[1546px] p-[64px_25px]">
        <AccountHeader />
        <AccountMain />
      </section>
    </div>
  );
}

export default Account;
