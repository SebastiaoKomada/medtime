import React from "react";
import "./index.css";
import SideBar from "../../shared/components/sideBar";

const Home = () => {
  return (
    <div className="container__home clearfix">

      <div className="colunm-1__home">
        <SideBar />
      </div>

      <div className="colunm-2__home">
        <div className="card-list__home">
          <a href="#" className="card-item__home">
            <div className="col-1__home">
              <h1 className="title__home">Benzetacil</h1>
              <h2 className="cont__home">forma: Comprimido</h2>
            </div>
            <div className="col-2__home">
              <h2 className="hor__home">07:00</h2>
              <h2 className="hor__home">07:00</h2>
              <h2 className="hor__home">07:00</h2>
              <h2 className="hor__home">07:00</h2>     
            </div>
          </a>
        </div>
        <div className="card-list__home">
          <a href="#" className="card-item__home">
            <div className="col-1__home">
              <h1 className="title__home">Benzetacil</h1>
              <h2 className="cont__home">forma: Comprimido</h2>
            </div>
            <div className="col-2__home">
              <h2 className="hor__home">07:00</h2>
              <h2 className="hor__home">07:00</h2>
              <h2 className="hor__home">07:00</h2>
              <h2 className="hor__home">07:00</h2>     
            </div>
          </a>
        </div>
        <div className="card-list__home">
          <a href="#" className="card-item__home">
            <div className="col-1__home">
              <h1 className="title__home">Benzetacil</h1>
              <h2 className="cont__home">forma: Comprimido</h2>
            </div>
            <div className="col-2__home">
              <h2 className="hor__home">07:00</h2>
              <h2 className="hor__home">07:00</h2>
              <h2 className="hor__home">07:00</h2>
              <h2 className="hor__home">07:00</h2>     
            </div>
          </a>
        </div>
      </div>

      <div className="colunm-3__home">
        <div className="card-calender__home">
          <a href="#" className="card-item-calender__home">
            <table>
              <thead>
                <tr>
                  <th>D</th>
                  <th>S</th>
                  <th>T</th>
                  <th>Q</th>
                  <th>Q</th>
                  <th>S</th>
                  <th>S</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>25</td>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                </tr>
              </tbody>
            </table>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
