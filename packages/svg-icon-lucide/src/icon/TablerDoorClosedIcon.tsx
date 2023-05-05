import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDoorClosedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDoorClosedIcon = React.forwardRef<SVGSVGElement, TablerDoorClosedIconProps>(
	function TablerDoorClosedIcon(props, ref) {
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
				<path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
				<path d="M2 20h20" />
				<path d="M14 12v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDoorClosedIcon.displayName = "TablerDoorClosedIcon";
}
