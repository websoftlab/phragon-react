import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTextOrientationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTextOrientationIcon = React.forwardRef<SVGSVGElement, TablerTextOrientationIconProps>(
	function TablerTextOrientationIcon(props, ref) {
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
				<path d="M9 15l-5 -5c-1.367 -1.367 -1.367 -3.633 0 -5s3.633 -1.367 5 0l5 5" />
				<path d="M5.5 11.5l5 -5" />
				<path d="M21 12l-9 9" />
				<path d="M21 12v4" />
				<path d="M21 12h-4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTextOrientationIcon.displayName = "TablerTextOrientationIcon";
}
