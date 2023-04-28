import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldBoltIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldBoltIcon = React.forwardRef<SVGSVGElement, TablerWorldBoltIconProps>(
	function TablerWorldBoltIcon(props, ref) {
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
				<path d="M20.985 12.52a9 9 0 1 0 -7.52 8.36" />
				<path d="M3.6 9h16.8" />
				<path d="M3.6 15h10.9" />
				<path d="M11.5 3a17 17 0 0 0 0 18" />
				<path d="M12.5 3c2.313 3.706 3.07 7.856 2.27 12" />
				<path d="M19 16l-2 3h4l-2 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWorldBoltIcon.displayName = "TablerWorldBoltIcon";
}
