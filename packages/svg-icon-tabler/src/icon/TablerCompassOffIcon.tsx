import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCompassOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCompassOffIcon = React.forwardRef<SVGSVGElement, TablerCompassOffIconProps>(
	function TablerCompassOffIcon(props, ref) {
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
				<path d="M13 9l3 -1l-1 3m-1 3l-6 2l2 -6" />
				<path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" />
				<path d="M12 3v2" />
				<path d="M12 19v2" />
				<path d="M3 12h2" />
				<path d="M19 12h2" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCompassOffIcon.displayName = "TablerCompassOffIcon";
}
