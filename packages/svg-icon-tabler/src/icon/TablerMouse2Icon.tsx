import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMouse2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMouse2Icon = React.forwardRef<SVGSVGElement, TablerMouse2IconProps>(function TablerMouse2Icon(
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
			<path d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z" />
			<path d="M12 3v7" />
			<path d="M6 10h12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMouse2Icon.displayName = "TablerMouse2Icon";
}
