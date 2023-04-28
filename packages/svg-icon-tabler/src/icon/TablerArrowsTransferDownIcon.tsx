import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsTransferDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsTransferDownIcon = React.forwardRef<SVGSVGElement, TablerArrowsTransferDownIconProps>(
	function TablerArrowsTransferDownIcon(props, ref) {
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
				<path d="M17 3v6" />
				<path d="M10 18l-3 3l-3 -3" />
				<path d="M7 21v-18" />
				<path d="M20 6l-3 -3l-3 3" />
				<path d="M17 21v-2" />
				<path d="M17 15v-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsTransferDownIcon.displayName = "TablerArrowsTransferDownIcon";
}
