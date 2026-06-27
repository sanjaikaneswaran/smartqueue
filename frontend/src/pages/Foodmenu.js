import "./Foodmenu.css";

export default function Header(){
    return(
        <div className="header">
            <button className="back-btn">←Back </button>

            <h2 className="restaurant-name">Samaja</h2>

            <div className="search-box">

                <span className="search-icon">🔍</span>
                <input placeholder="search for food..."/>

.            </div>


        </div>

    );

     
    }
