import React from "react";
import { Flex } from "grid-styled";
import { t } from "c-3po";
import { withRouter } from "react-router";

import Link from "metabase/components/Link";

import colors from "metabase/lib/colors";

const FILTERS = [
  {
    name: t`Everything`,
    filter: null,
  },
  {
    name: t`Dashboards`,
    filter: "dashboard",
  },
  {
    name: t`Questions`,
    filter: "card",
  },
  {
    name: t`Pulses`,
    filter: "pulse",
  },
];

const ItemTypeFilterBar = props => {
  const { location } = props;
  return (
    <Flex align="center" className="border-bottom">
      {FILTERS.map(f => {
        let isActive = location.query.type === f.filter;

        if (!location.query.type && !f.filter) {
          isActive = true;
        }

        const color = isActive ? colors.brand : "inherit";

        return (
          <Link
            to={{
              pathname: location.pathname,
              query: f.filter ? { type: f.filter } : null,
            }}
            color={color}
            mr={2}
            py={1}
            style={{
              borderBottom: `2px solid ${
                isActive ? colors.brand : "transparent"
              }`,
            }}
          >
            <h5
              className="text-uppercase"
              style={{
                color: isActive ? colors.brand : colors["text-medium"],
                fontWeight: 900,
              }}
            >
              {f.name}
            </h5>
          </Link>
        );
      })}
    </Flex>
  );
};

export default withRouter(ItemTypeFilterBar);
