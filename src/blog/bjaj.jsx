import React from 'react';
import '../components/Blogs.css';

const Blog = () => {
    return (
        <div style={styles.blogContainer}>
            <h1 className="animated-heading">Bajaj Stocks Surge Following Recent IPO Announcement</h1>
            <div style={styles.post}>
                <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725361124/Screenshot_25_jqc6ai.png" alt="Bajaj Stocks Surge" style={styles.postImage} />

                <h2 className="subheading">The Impact of Bajaj's IPO Announcement</h2>
                <p style={styles.postText}>
                    The recent announcement of an Initial Public Offering (IPO) by Bajaj has led to a significant surge in the company's stock prices. This surge reflects growing investor confidence in the company's future prospects and its ability to deliver strong returns.
                </p>

                <h2 className="subheading">Investor Optimism and Market Reaction</h2>
                <p style={styles.postText}>
                    Over the past few weeks, Bajaj's stocks have seen a steady climb, culminating in a sharp rise immediately following the IPO announcement.
                    <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725350565/2_l0gtg8.png" alt="IPO" className="inline-image right-image" />
                    Investors are optimistic about the potential growth opportunities that this IPO could unlock for Bajaj, particularly in expanding its market reach and enhancing its product offerings.
                </p>

                <h2 className="subheading">Analyst Predictions and Future Prospects</h2>
                <p style={styles.postText}>
                    Market analysts have been closely monitoring this development, with many predicting continued upward momentum in Bajaj's stock prices. The company’s strong fundamentals, combined with favorable market conditions, have made this IPO one of the most anticipated events in the financial sector this year.
                </p>

                <h2 className="subheading">Increased Trading Volumes Before the IPO</h2>
                <p style={styles.postText}>
                    In the days leading up to the IPO, trading volumes in Bajaj stocks have also increased significantly, indicating heightened investor interest. The market's reaction suggests that Bajaj's strategic decisions are being well-received, and the IPO could serve as a catalyst for further growth in the company's valuation.
                </p>

                <h2 className="subheading">Utilization of IPO Funds for Expansion</h2>
                <p style={styles.postText}>
                    <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725350564/3_zlc3pb.png" alt="Investment" className="inline-image" />
                    As the IPO date approaches, investors will be keenly watching how Bajaj plans to utilize the capital raised. The company has indicated that the funds will be used for various expansion projects, including new product development and market diversification.
                </p>

                <h2 className="subheading">Conclusion: A Testament to Bajaj's Market Position</h2>
                <p style={styles.postText}>
                    Overall, the recent surge in Bajaj stocks is a testament to the company's solid market position and the confidence that investors have in its future. As more details about the IPO become available, it will be interesting to see how the stock market continues to respond.
                </p>
            </div>
        </div>
    );
};

const styles = {
    blogContainer: {
        maxWidth: '800px',
        width: '100%',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '0 auto'
    },
    postImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        marginBottom: '20px',
    },
    postText: {
        fontSize: '2rem',
        color: '#555',
        lineHeight: '1.6',
        marginBottom: '20px',
    },
};

export default Blog;
