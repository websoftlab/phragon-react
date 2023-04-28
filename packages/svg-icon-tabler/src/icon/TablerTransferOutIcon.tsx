import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTransferOutIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTransferOutIcon = React.forwardRef<SVGSVGElement, TablerTransferOutIconProps>(
	function TablerTransferOutIcon(props, ref) {
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
				<path d="M4 19v2h16v-14l-8 -4l-8 4v2" />
				<path d="M13 14h-9" />
				<path d="M7 11l-3 3l3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTransferOutIcon.displayName = "TablerTransferOutIcon";
}
