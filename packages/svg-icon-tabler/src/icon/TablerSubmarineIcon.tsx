import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSubmarineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSubmarineIcon = React.forwardRef<SVGSVGElement, TablerSubmarineIconProps>(
	function TablerSubmarineIcon(props, ref) {
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
				<path d="M3 11v6h2l1 -1.5l3 1.5h10a3 3 0 0 0 0 -6h-10h0l-3 1.5l-1 -1.5h-2z" />
				<path d="M17 11l-1 -3h-5l-1 3" />
				<path d="M13 8v-2a1 1 0 0 1 1 -1h1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSubmarineIcon.displayName = "TablerSubmarineIcon";
}
