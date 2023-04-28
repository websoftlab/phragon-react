import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoon2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoon2Icon = React.forwardRef<SVGSVGElement, TablerMoon2IconProps>(function TablerMoon2Icon(
	props,
	ref
) {
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
			<path d="M16.418 4.157a8 8 0 0 0 0 15.686" />
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoon2Icon.displayName = "TablerMoon2Icon";
}
