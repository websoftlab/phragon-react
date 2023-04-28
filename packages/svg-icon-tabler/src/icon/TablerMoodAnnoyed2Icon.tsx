import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodAnnoyed2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodAnnoyed2Icon = React.forwardRef<SVGSVGElement, TablerMoodAnnoyed2IconProps>(
	function TablerMoodAnnoyed2Icon(props, ref) {
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
				<path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
				<path d="M15 14c-2 0 -3 1 -3.5 2.05" />
				<path d="M10 9.25c-.5 1 -2.5 1 -3 0" />
				<path d="M17 9.25c-.5 1 -2.5 1 -3 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoodAnnoyed2Icon.displayName = "TablerMoodAnnoyed2Icon";
}
