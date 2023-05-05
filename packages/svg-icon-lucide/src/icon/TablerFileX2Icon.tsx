import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileX2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileX2Icon = React.forwardRef<SVGSVGElement, TablerFileX2IconProps>(function TablerFileX2Icon(
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
			<path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
			<path d="M14 2v6h6" />
			<path d="m3 12.5 5 5" />
			<path d="m8 12.5-5 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFileX2Icon.displayName = "TablerFileX2Icon";
}
