import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBoxAlignBottomLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBoxAlignBottomLeftIcon = React.forwardRef<SVGSVGElement, TablerBoxAlignBottomLeftIconProps>(
	function TablerBoxAlignBottomLeftIcon(props, ref) {
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
				<path d="M5 13h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1z" />
				<path d="M4 9v.01" />
				<path d="M4 4v.01" />
				<path d="M9 4v.01" />
				<path d="M15 4v.01" />
				<path d="M15 20v.01" />
				<path d="M20 4v.01" />
				<path d="M20 9v.01" />
				<path d="M20 15v.01" />
				<path d="M20 20v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBoxAlignBottomLeftIcon.displayName = "TablerBoxAlignBottomLeftIcon";
}
