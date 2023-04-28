import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWashDryShadeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWashDryShadeIcon = React.forwardRef<SVGSVGElement, TablerWashDryShadeIconProps>(
	function TablerWashDryShadeIcon(props, ref) {
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
				<path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
				<path d="M3 11l8 -8" />
				<path d="M3 17l14 -14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWashDryShadeIcon.displayName = "TablerWashDryShadeIcon";
}
