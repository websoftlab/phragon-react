import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPackageOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPackageOffIcon = React.forwardRef<SVGSVGElement, TablerPackageOffIconProps>(
	function TablerPackageOffIcon(props, ref) {
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
				<path d="M8.812 4.793l3.188 -1.793l8 4.5v8.5m-2.282 1.784l-5.718 3.216l-8 -4.5v-9l2.223 -1.25" />
				<path d="M14.543 10.57l5.457 -3.07" />
				<path d="M12 12v9" />
				<path d="M12 12l-8 -4.5" />
				<path d="M16 5.25l-4.35 2.447m-2.564 1.442l-1.086 .611" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPackageOffIcon.displayName = "TablerPackageOffIcon";
}
