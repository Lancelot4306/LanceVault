import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { log } from 'console';

const Home = () => {
  const loggedIn = { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome to My Website"
            user={loggedIn?.firstName || "Guest"}
            subtext="We're glad to have you here."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1000.75}
          />
        </header>

        Recent Transactions
      </div>

      <RightSidebar 
        user={loggedIn} 
        transactions={[]}
        banks={[{ currentBalance: 123 }, { currentBalance: 1243 }]}
      />
    </section>
  )
}

export default Home
