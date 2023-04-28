import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBookUploadIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBookUploadIcon = React.forwardRef<SVGSVGElement, TablerBookUploadIconProps>(
	function TablerBookUploadIcon(props, ref) {
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
				<path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />
				<path d="M11 16h-5a2 2 0 0 0 -2 2" />
				<path d="M15 16l3 -3l3 3" />
				<path d="M18 13v9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBookUploadIcon.displayName = "TablerBookUploadIcon";
}
