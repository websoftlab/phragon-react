import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileVolumeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileVolumeIcon = React.forwardRef<SVGSVGElement, TablerFileVolumeIconProps>(
	function TablerFileVolumeIcon(props, ref) {
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
				<path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
				<path d="M14 2 L14 8 L20 8" />
				<path d="m7 10-3 2H2v4h2l3 2v-8Z" />
				<path d="M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileVolumeIcon.displayName = "TablerFileVolumeIcon";
}
