import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerInputSearchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerInputSearchIcon = React.forwardRef<SVGSVGElement, TablerInputSearchIconProps>(
	function TablerInputSearchIcon(props, ref) {
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
				<path d="M19 11v-3a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h5" />
				<path d="M15.5 15.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
				<path d="M17.5 17.5l2.5 2.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerInputSearchIcon.displayName = "TablerInputSearchIcon";
}
