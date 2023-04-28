import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldPlusIcon = React.forwardRef<SVGSVGElement, TablerWorldPlusIconProps>(
	function TablerWorldPlusIcon(props, ref) {
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
				<path d="M20.985 12.518a9 9 0 1 0 -8.45 8.466" />
				<path d="M3.6 9h16.8" />
				<path d="M3.6 15h11.4" />
				<path d="M11.5 3a17 17 0 0 0 0 18" />
				<path d="M12.5 3a16.998 16.998 0 0 1 2.283 12.157" />
				<path d="M16 19h6" />
				<path d="M19 16v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWorldPlusIcon.displayName = "TablerWorldPlusIcon";
}
