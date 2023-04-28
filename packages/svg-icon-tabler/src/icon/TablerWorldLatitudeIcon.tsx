import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldLatitudeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldLatitudeIcon = React.forwardRef<SVGSVGElement, TablerWorldLatitudeIconProps>(
	function TablerWorldLatitudeIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M4.6 7l14.8 0" />
				<path d="M3 12l18 0" />
				<path d="M4.6 17l14.8 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWorldLatitudeIcon.displayName = "TablerWorldLatitudeIcon";
}
