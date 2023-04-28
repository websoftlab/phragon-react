import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDropletHalf2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDropletHalf2Icon = React.forwardRef<SVGSVGElement, TablerDropletHalf2IconProps>(
	function TablerDropletHalf2Icon(props, ref) {
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
				<path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
				<path d="M6 14h12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDropletHalf2Icon.displayName = "TablerDropletHalf2Icon";
}
