import React from "react";
import {Link} from "../components/Link";
import {connect} from "react-redux";
import {setVisibilityFilter} from "../actions";
import {getVisibilityFilter} from "../redusers"

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === getVisibilityFilter(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onFilterClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
