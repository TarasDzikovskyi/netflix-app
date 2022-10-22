import { Link } from 'react-router-dom'
import './search.scss'
export default function Search() {

    return (

        <div className="searchh">

            <div className="span3 widget-span widget-type-raw_html custom-search"  data-widget-type="raw_html" data-x="4" data-w="3">
                <div className="cell-wrapper layout-widget-wrapper">
                    <span id="hs_cos_wrapper_module_14308928327274411" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_raw_html"  data-hs-cos-general-type="widget" data-hs-cos-type="raw_html">
                        <form  role="search" className="navbar-form navbar-left ng-pristine ng-valid" id="express-form" novalidate="">
                        <input required="" name="q" className="form-control tt-input" id="express-form-typeahead" autocomplete="off" spellcheck="false" dir="auto" type="text" />
                        <button className="search-btn" type="submit"><span className="icon"></span></button>
                    </form>
                    </span>
                </div>
            </div>
        </div>

    )
}