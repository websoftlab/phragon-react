import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTransferInIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTransferInIcon = React.forwardRef<SVGSVGElement, TablerTransferInIconProps>(
	function TablerTransferInIcon(props, ref) {
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
				<path d="M4 18v3h16v-14l-8 -4l-8 4v3" />
				<path d="M4 14h9" />
				<path d="M10 11l3 3l-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTransferInIcon.displayName = "TablerTransferInIcon";
}
