import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandPushbulletIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandPushbulletIcon = React.forwardRef<SVGSVGElement, TablerBrandPushbulletIconProps>(
	function TablerBrandPushbulletIcon(props, ref) {
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
				<path d="M11 8v8h2a4 4 0 1 0 0 -8h-2z" />
				<path d="M8 8v8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandPushbulletIcon.displayName = "TablerBrandPushbulletIcon";
}
