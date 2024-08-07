// App.js
import React from 'react';
import TradingAppBox from './TradingAppBox';
import './TradingAppBox.css';
const Market = (props) => {
    const tradingApps = [
        {
            name: 'Zerodha Kite',
            rating: '4.5/5',
            openingCharge: '₹300',
            deliveryBrokerage: '₹20 per executed order',
            downloads: '1cr+',
            activeUsers: '500K+',
            pros: ['SEBI registered investment advisor offers mutual fund advisory services.', "Two-factor authentication which ensures extra security.",
                "User friendly and clean interface.",
                "Hassle-free onboarding experience."],
            cons: ['Less reactive customer support.',
                'No services related to NRI trading accounts.',
                'Does not provide intraday trading tips and recommendations.',
                'No commodity and currency trading.'],
            suitableFor: 'Beginner to advanced traders',
            webLink: 'https://zerodha.com/kite',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.zerodha.kite3'
        },
        {
            name: 'Upstox PRO Trading App',
            rating: '4.0/5',
            openingCharge: '₹150',
            deliveryBrokerage: '₹20 per executed order',
            downloads: '1cr+',
            activeUsers: '400K+',
            pros: ['Reasonable brokerage charges',
                'Available on both iOS and Android.',
                'Browsing between screens and trade is very easy.',
                'No fees for account maintenance and account opening.',
                'Option to set an unlimited number of price alerts of a specific stock.',
                'No cap on customizing of stocks watchlist.'],
            cons: ['User complaints on the updated version of the Upstox App.',
                'Charges INR 20 for call and trade orders.',
                'Chart interface is poor.',
                'Does not offer any research and recommendation.'],
            suitableFor: 'Traders looking for low-cost trading',
            webLink: 'https://upstox.com',
            playStoreLink: 'https://play.google.com/store/apps/details?id=in.upstox.pro'
        },
        {
            name: '5 Paisa',
            rating: '4.0/5',
            openingCharge: '₹0',
            deliveryBrokerage: '₹20 per executed order',
            downloads: '1cr+',
            activeUsers: '600K+',
            pros: ['Extra benefits such as no charge for call and trades, cashback options, among others.',
                'No charges for opening a demat account.',
                'No commission on MF investing.',
                'One-click order placement.',
                'Highly customizable app.',
                'Multilingual app support.',
                'Provides research and recommendations.'],
            cons: ['Complaints of intermittent hanging of the app.',
                'Distractions on app due to advertisements and promotional offers.'],
            suitableFor: 'Traders preferring advanced charting',
            webLink: 'https://www.5paisa.com/',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.fivepaisa.trade'
        },
        {
            name: 'ICICI Direct',
            rating: '4.0/5',
            openingCharge: '₹900',
            deliveryBrokerage: '0.55% of transaction value',
            downloads: '1M+',
            activeUsers: '300K+',
            pros: ['Biometric based log-in to the app.',
                'High refresh rate and low downtime.',
                'Updated version of the app is more responsive.',
                'Smart alert features help you against high risk stocks.',
                'Responsive customer service.'],
            cons: ['User complainants of slow login process.',
                'Exchange membership is only limited to BSE and NSE.',
                'Not a technology-driven app.',
                'Average ratings on iOS and Android.',
                'Technical charts are not as interactive as peers such as Zerodha’s Kite.',
                'Difficult for beginners.'],
            suitableFor: 'Investors seeking full-service brokerage',
            webLink: 'https://www.icicidirect.com/',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.icicisecs'
        },
        {
            name: 'Kotak Securities',
            rating: '4.0/5',
            openingCharge: '₹750',
            deliveryBrokerage: '0.49% of transaction value',
            downloads: '1M+',
            activeUsers: '250K+',
            pros: ['Easy user interface.',
                'Wide range of research and analysis tools.',
                'Access to the international market.',
                'Solid customer support system.'],
            cons: ['Features such as price alerts and advanced orders panel are not available.',
                'Does not offer a demo account.',
                'No option of leveraged trading via Kotak trading app.'],
            suitableFor: 'Investors looking for research-driven trading',
            webLink: 'https://www.kotaksecurities.com/',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.msf.kotaksecurities'
        },
        {
            name: 'Angel Speed Pro',
            rating: '4.0/5',
            openingCharge: '₹600',
            deliveryBrokerage: '₹20 per executed order',
            downloads: '1cr+',
            activeUsers: '200K+',
            pros: ['Highly customizable app',
                'Robust and innovative software',
                'No charges for account opening and account maintenance.',
                'Very responsive customer care service.'],
            cons: ['Comparatively higher charges.',
                'User complaints of software compatibility issues.',
                'Relatively bulky trading app.'],
            suitableFor: 'Experienced traders',
            webLink: 'https://www.angelbroking.com/',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.msf.angelmobile'
        },
        {
            name: 'IIFL Markets Mobile App',
            rating: '4.0/5',
            openingCharge: '₹750',
            deliveryBrokerage: '0.50% of transaction value',
            downloads: '5M+',
            activeUsers: '150K+',
            pros: ['Easy user interface',
                'Free research reports.',
                'Responsive customer care.',
                'Allows placing After Market Orders (AMOs).',
                'Free guest user log-in.'],
            cons: ['User-based complaints of problems in the portfolio section.',
                'Call and trade services are provided with an extra charge of INR 50.'
            ],
            suitableFor: 'Casual traders and investors',
            webLink: 'https://www.indiainfoline.com/',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.indiainfoline'
        },
        {
            name: 'MO Investor',
            rating: '4.0/5',
            openingCharge: '₹500',
            deliveryBrokerage: '₹15 per executed order',
            downloads: '5M+',
            activeUsers: '250K+',
            pros: ['User-friendly and very quick in its process.',
                'Allows easy overview of charts, portfolio and upcoming market events.',
                'Charting tools are not complex and very easy to understand.',
                'No charges for account opening, advisory and research services.'],
            cons: ['Higher brokerage transactional charges.',
                'Complaints on poor customer service.'],
            suitableFor: 'Long-term investors',
            webLink: 'https://www.motilaloswal.com/',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.motilaloswal.momarkets'
        },
        {
            name: 'Edelweiss Mobile Trading App',
            rating: '4.1/5',
            openingCharge: '₹700',
            deliveryBrokerage: '0.30% - 0.50% of transaction value',
            downloads: '300K+',
            activeUsers: '200K+',
            pros: ['Advanced market analysis tools, charts and reports.',
                'No charges for account opening charges and account maintenance for the first year.',
                'Elite plan offers a lot of free value added services.'],
            cons: ['No scope for bracket orders.',
                'Extra charges to be paid in lite plan to avail basic features.',
                'High switching charges of INR 2,500 from elite to lite plan.'],
            suitableFor: 'Diverse investment strategies',
            webLink: 'https://www.edelweiss.in/',
            playStoreLink: 'https://play.google.com/store/apps/details?id=in.edelweiss.mobile'
        },
        {
            name: 'Paytm Money',
            rating: '3.5/5',
            openingCharge: '₹0',
            deliveryBrokerage: '₹10 per executed order',
            downloads: '10cr+',
            activeUsers: '1M+',
            pros: ['SEBI registered investment advisor offers mutual fund advisory services.',
                'Two-factor authentication which ensures extra security.',
                'User friendly and clean interface.',
                'Hassle-free onboarding experience.'],
            cons: ['Less reactive customer support.',
                'No services related to NRI trading accounts.',
                'Does not provide intraday trading tips and recommendations.',
                'No commodity and currency trading.'],
            suitableFor: 'New investors and beginners',
            webLink: 'https://www.paytmmoney.com/',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.paytmmoney'
        },
        {
            name: 'Sharekhan',
            rating: '3.5/5',
            openingCharge: '₹750',
            deliveryBrokerage: '0.50% of transaction value',
            downloads: '5M+',
            activeUsers: '300K+',
            pros: ['No minimum deposit to be maintained.',
                'Advanced features and tools for all the asset classes.',
                'Detailed research analysis for trader, investor and mutual fund investor.',
                'Extensive education material, courses and workshops.'],
            cons: ['Supports only one fiat currency- INR.',
                'Less transparency on charges.',
                'Higher brokerage charges as compared to other brokers.',
                'User-based complaints on slow upgrades.'],
            suitableFor: 'Active traders and investors',
            webLink: 'https://www.sharekhan.com/',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.sharekhan.android.activity'
        },
        {
            name: 'Groww Trading App',
            rating: '3.5/5',
            openingCharge: '₹0',
            deliveryBrokerage: '₹20 per executed order',
            downloads: '5cr+',
            activeUsers: '1.2M+',
            pros: ['Free account opening and maintenance.',
                'Low-cost brokerage.',
                'Groww offers a user-friendly and intuitive app that allows you to invest in stocks, mutual funds, gold, US stocks, fixed deposits and more with just a few clicks.',
                'Groww provides various tools and features to help you make informed investment decisions, such as live market updates, stock screener, watchlist, portfolio tracker, SIP calculator, smart alerts and more2.',
                'Groww has a team of experts and analysts providing research reports, recommendations, tips and insights on various stocks and mutual funds.'],
            cons: ['It does not offer some of the products like commodities, derivatives, currency, and bonds.',
                'Groww does not provide some of the features that other platforms offer, such as charting tools, technical indicators, historical data, and backtesting.'],
            suitableFor: 'Beginners and passive investors',
            webLink: 'https://groww.in/',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.nextbillion.groww'
        },
        {
            name: 'Fyers Investment App',
            rating: '2.5/5',
            openingCharge: '₹0',
            deliveryBrokerage: '₹20 per executed order',
            downloads: '1M+',
            activeUsers: '500K+',
            pros: ['Free account opening and maintenance.',
                'Low-cost brokerage.'],
            cons: ['Analysis tools need improvement.'],
            suitableFor: 'Active traders seeking low-cost brokerage',
            webLink: 'https://www.fyers.in/',
            playStoreLink: 'https://play.google.com/store/apps/details?id=in.cloudquant.fyersone'
        }
    ];

    return (
        <>
            <div style={{  backgroundColor: 'whitesmoke' }}>
                <h1 style={{ color: 'voilet' }}>Trading Apps</h1>
                <div className="trading-app-container">
                    {tradingApps.map((app, index) => (
                        <TradingAppBox key={index} app={app} />
                    ))}
                </div>
            </div>
            <br /> <br />

            <div style={{backgroundColor: 'whitesmoke' }}>
                <div className="trading-apps-overview">
                    <h2>What Are Trading Apps and How Do They Work?</h2>
                    <p>Trading apps are mobile applications that allow you to trade in the stock market. They are designed to provide you with various services and facilities from the brokerage house that you have your account with.</p>
                    <p>You can use trading apps to buy, sell, modify, cancel, and monitor your orders, as well as to access live market data, charts, technical indicators, and portfolio information. Trading apps can help you to trade anytime and anywhere, as long as you have an internet connection and a smartphone.</p>
                    <p>Some of the functions that trading apps perform are:</p>
                    <ul style={{ fontSize: '15px' }}>
                        <li>Monitors your investment and the corresponding financial portfolio</li>
                        <li>Allows you to invest in a range of assets like stocks, commodities, mutual funds, etc.</li>
                        <li>Enables you to open a demat account with some apps</li>
                        <li>Gives you a view of the stock market today, or any other markets in which you can invest.</li>
                    </ul>
                </div>
                <br /> <br />
                <div className="methodology">
                    <h2>Methodology: How We Evaluate Best Trading Apps</h2>
                    <h6>Forbes Advisor India analyzed 30 trading apps on the Indian financial market and selected the best, based on the following metrics:</h6>
                    <ol>
                        <li><strong>Speed of Execution:</strong> No matter if one does intraday or any other kind of trading, speed is the essence. We ranked the trading apps on the basis of reliability and speed.</li>
                        <li><strong>Ease of Use of the Mobile App:</strong> We have listed only those trading apps which allow the user to execute even the most complicated trade via the simplest interface. Trading apps must be ultra smooth in their functioning which helps the user in executing the trading strategies in the quickest and easiest way.</li>
                        <li><strong>Availability of Advanced Features And Customization:</strong> An efficient trading app must support all the advanced trading features and should be receptive to customization.</li>
                        <li><strong>Access to Real-Time and Live Market Feeds:</strong> This feature can either make or break your trading deal. Real-time feeds are very much an essential requirement for an app to be successful.</li>
                        <li><strong>Range of Products:</strong> Availability of different range of products such as stocks, equities, MFs, insurance, IPOs, among others. (10% of score)</li>
                        <li><strong>Trading App Charges:</strong> Fees and other charges such as account opening, account maintenance, demat charges have been taken into account while selecting the best trading apps.</li>
                    </ol>
                </div>
                <br /> <br />
                <div className="mobile-trading-steps">
                    <h2>How to Trade on a Mobile Trading App</h2>
                    <p>Trading apps, also known as stock trading apps or investment apps, are mobile applications designed to facilitate the buying and selling of financial assets, such as stocks, bonds, cryptocurrencies, and other investment instruments. These apps allow users to trade in various financial markets and manage their investment portfolios using their smartphones or tablets. They have gained popularity in recent years due to their convenience, accessibility, and user-friendly interfaces.</p>
                    <h6>Here’s how you can trade on a mobile trading app:</h6>
                    <ol>
                        <li><strong>Fees and Commissions:</strong> Users should be aware of the fees and commissions associated with trading through these apps. Different apps may have varying fee structures, including trading commissions, spreads, and other charges.</li>
                        <li><strong>Regulatory Compliance:</strong> Trading apps must comply with financial regulations in the regions they operate. They often require users to complete identity verification and adhere to anti-money laundering (AML) and know-your-customer (KYC) procedures.</li>
                        <li><strong>Account Setup:</strong> To get started, users need to create an account with the trading app. This involves providing personal information, verifying identity, and linking a bank or brokerage account to fund trades.</li>
                        <li><strong>Market Access:</strong> Trading apps provide access to various financial markets, including stock exchanges (e.g., NYSE, NASDAQ), options, futures, forex, and cryptocurrency exchanges.</li>
                        <li><strong>Research and Analysis:</strong> Many trading apps offer research tools, news, and real-time market data to help users make informed investment decisions. Users can access charts, financial news, and analysis to stay updated on market trends.</li>
                        <li><strong>Order Placement:</strong> Users can place orders to buy or sell financial assets through the app. They can choose between different types of orders, including market orders, limit orders, stop orders, and more. Order execution occurs in real time.</li>
                        <li><strong>Portfolio Management:</strong> Trading apps allow users to manage their investment portfolios. They can view their holdings, account balances, and transaction history. Some apps provide tools to analyze and track the performance of their investments.</li>
                    </ol>
                </div>
                <br /> <br />

                <div className="key-features">
                    <h2>Key Features of Trading Apps</h2>
                    <ul>
                        <li><strong>User-Friendly Interface:</strong> Trading apps typically offer intuitive and easy-to-navigate interfaces to make it simple for users to place trades, access market data, and manage their portfolios.</li>
                        <li><strong>Market Access:</strong> Access to a wide range of financial markets, including stocks, bonds, options, futures, commodities, forex, and cryptocurrencies, depending on the app’s offerings.</li>
                        <li><strong>Real-Time Market Data:</strong> Live price quotes, charts, and market news to help users stay updated on market movements and make informed decisions.</li>
                        <li><strong>Order Placement:</strong> Ability to place various types of orders, such as market orders, limit orders, stop orders, and more, to execute trades according to the user’s preferences.</li>
                        <li><strong>Portfolio Management:</strong> Tools to monitor and manage investment portfolios, view account balances, track holdings, and review transaction history.</li>
                        <li><strong>Research and Analysis:</strong> Access to fundamental and technical analysis tools, as well as research reports and investment recommendations.</li>
                        <li><strong>Customization:</strong> The ability to customize watchlists, set up alerts, and personalize the app to match the user’s trading preferences.</li>
                        <li><strong>Risk Management:</strong> Features for setting stop-loss and take-profit orders to manage risk, as well as margin trading and leverage options for advanced traders.</li>
                        <li><strong>Notifications and Alerts:</strong> Customizable price alerts and notifications to keep users informed about changes in asset prices.</li>
                        <li><strong>Security:</strong> Robust security measures, including encryption, multi-factor authentication, and secure login processes to protect user data and accounts.</li>
                        <li><strong>Educational Resources:</strong> Some trading apps offer educational content, tutorials, and resources to help users learn about trading and investing.</li>
                        <li><strong>Customer Support:</strong> Access to customer support, live chat, or help centers for addressing user inquiries or technical issues.</li>
                        <li><strong>Account Funding:</strong> Integration with bank accounts and multiple deposit and withdrawal options for funding trading accounts.</li>
                        <li><strong>Regulatory Compliance:</strong> Adherence to financial regulations and procedures, such as identity verification (KYC), anti-money laundering (AML) requirements, and tax reporting.</li>
                        <li><strong>Performance Tracking:</strong> Tools for assessing the performance of investments, including gain/loss calculations, risk metrics, and historical data.</li>
                        <li><strong>Mobile Trading:</strong> Trading apps are designed for mobile devices, allowing users to trade and manage their investments on the go.</li>
                        <li><strong>Third-Party Integrations:</strong> Integration with third-party apps, tools, and trading algorithms to enhance the trading experience.</li>
                        <li><strong>Fee and Commission Transparency:</strong> Clear information on trading fees, commissions, spreads, and any other charges associated with using the app.</li>
                    </ul>
                </div>
                <br /> <br />
                <div className="trading-app-benefits">
                    <h2>Benefits Of Using Trading Apps</h2>
                    <ul>
                        <li>Fast execution of order placement.</li>
                        <li>Paperless account opening process.</li>
                        <li>Real-time and live market feeds.</li>
                        <li>Lower fees and charges than broker counterparts.</li>
                        <li>Instant notifications and price alerts.</li>
                        <li>Access to historical charts and detailed research reports.</li>
                        <li>Easy to understand and simple brokerage slabs.</li>
                        <li>Diverse mutual fund (MFs) options and quick IPO application process.</li>
                        <li>Offer insight from experts or brokerage firms in the form of up-to-date research reports.</li>
                    </ul>
                </div>
                <br /> <br />
                <div className="trading-app-download">
                    <h2>Step-By-Step Guide To Download A Trading App</h2>
                    <div className="step">
                        <div className="step-number">Step 1:</div>
                        <div className="step-description">
                            <p>Select your broker and download their trading app from your Aadhar-linked mobile number.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">Step 2:</div>
                        <div className="step-description">
                            <p>Sign up by setting up your user ID, password and keep your PAN number, Aadhar card and bank account number ready for online submission of documents.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">Step 3:</div>
                        <div className="step-description">
                            <p>After giving all the required details, you need to enter the OTP sent from the trading app on your registered mobile number.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">Step 4:</div>
                        <div className="step-description">
                            <p>A trading application may ask here to pay account opening charges, if it is not free. And, if free, you can directly log in.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">Step 5:</div>
                        <div className="step-description">
                            <p>As you’re logged in, you can create your watchlist and start trading.</p>
                        </div>
                    </div>
                </div> <br /><br />
                <div className="trading-account-documents">
                    <h2>Documents Required For Opening Up A Trading Account</h2>
                    <ul>
                        <li><strong>Photo ID proof:</strong> PAN card / Voter’s ID / Passport / Driving license / Aadhaar card</li>
                        <li><strong>Address proof:</strong> Landline bill / Electricity bill / Bank statement / Ration card / Passport / Voter’s ID</li>
                        <li><strong>Income Proof (optional):</strong> Last six months bank statement / Three months’ salary slips / Income tax return (ITR)</li>
                        <li><strong>Bank Proof:</strong> Canceled cheque / Bank passport / Account statement</li>
                        <li><strong>Registered lease or sale agreement / Driving license</strong></li>
                        <li><strong>One passport-size photograph</strong></li>
                        <li><strong>Signature on a piece of paper</strong></li>
                    </ul>
                </div>
            </div>
            <footer className="text-center p-3 " style={{ backgroundColor: '#042743', color: '#fff', position: 'relative', bottom: '0', width: '100%' }} onClick={props.toggleMode}>
                © 2023 TradeCollab Copyright:
            </footer>

        </>


    );
};

export default Market;
