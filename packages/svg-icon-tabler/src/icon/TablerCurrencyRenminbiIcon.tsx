import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyRenminbiIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyRenminbiIcon = React.forwardRef<SVGSVGElement, TablerCurrencyRenminbiIconProps>(
	function TablerCurrencyRenminbiIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M15 9v8a2 2 0 1 0 4 0" />
				<path d="M19 9h-14" />
				<path d="M19 5h-14" />
				<path d="M9 9v4c0 2.5 -.667 4 -2 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrencyRenminbiIcon.displayName = "TablerCurrencyRenminbiIcon";
}
