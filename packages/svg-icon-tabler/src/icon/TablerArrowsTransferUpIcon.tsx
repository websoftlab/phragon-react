import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsTransferUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsTransferUpIcon = React.forwardRef<SVGSVGElement, TablerArrowsTransferUpIconProps>(
	function TablerArrowsTransferUpIcon(props, ref) {
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
				<path d="M7 21v-6" />
				<path d="M20 6l-3 -3l-3 3" />
				<path d="M17 3v18" />
				<path d="M10 18l-3 3l-3 -3" />
				<path d="M7 3v2" />
				<path d="M7 9v2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsTransferUpIcon.displayName = "TablerArrowsTransferUpIcon";
}
