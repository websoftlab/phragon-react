import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowUpZAIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowUpZAIcon = React.forwardRef<SVGSVGElement, TablerArrowUpZAIconProps>(
	function TablerArrowUpZAIcon(props, ref) {
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
				<path d="m3 8 4-4 4 4" />
				<path d="M7 4v16" />
				<path d="M15 4h5l-5 6h5" />
				<path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
				<path d="M20 18h-5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowUpZAIcon.displayName = "TablerArrowUpZAIcon";
}
