import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileKey2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileKey2Icon = React.forwardRef<SVGSVGElement, TablerFileKey2IconProps>(function TablerFileKey2Icon(
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
			<path d="M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4" />
			<path d="M14 2 L14 8 L20 8" />
			<path d="M6 16 A2 2 0 0 1 4 18 A2 2 0 0 1 2 16 A2 2 0 0 1 6 16" />
			<path d="m10 10-4.5 4.5" />
			<path d="m9 11 1 1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFileKey2Icon.displayName = "TablerFileKey2Icon";
}
