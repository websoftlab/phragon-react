import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldPauseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldPauseIcon = React.forwardRef<SVGSVGElement, TablerWorldPauseIconProps>(
	function TablerWorldPauseIcon(props, ref) {
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
				<path d="M20.945 12.997a9 9 0 1 0 -7.928 7.945" />
				<path d="M3.6 9h16.8" />
				<path d="M3.6 15h9.9" />
				<path d="M11.5 3a17 17 0 0 0 0 18" />
				<path d="M12.5 3a16.992 16.992 0 0 1 2.51 10.526" />
				<path d="M17 17v5" />
				<path d="M21 17v5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWorldPauseIcon.displayName = "TablerWorldPauseIcon";
}
