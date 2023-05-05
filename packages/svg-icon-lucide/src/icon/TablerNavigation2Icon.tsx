import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNavigation2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNavigation2Icon = React.forwardRef<SVGSVGElement, TablerNavigation2IconProps>(
	function TablerNavigation2Icon(props, ref) {
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
				<path d="M12 2 L19 21 L12 17 L5 21 L12 2Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerNavigation2Icon.displayName = "TablerNavigation2Icon";
}
