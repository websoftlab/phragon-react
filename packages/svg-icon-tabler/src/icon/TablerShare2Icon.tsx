import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShare2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShare2Icon = React.forwardRef<SVGSVGElement, TablerShare2IconProps>(function TablerShare2Icon(
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
			<path d="M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1" />
			<path d="M12 14v-11" />
			<path d="M9 6l3 -3l3 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerShare2Icon.displayName = "TablerShare2Icon";
}
