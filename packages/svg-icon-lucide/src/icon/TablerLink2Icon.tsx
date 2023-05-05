import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLink2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLink2Icon = React.forwardRef<SVGSVGElement, TablerLink2IconProps>(function TablerLink2Icon(
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
			<path d="M9 17H7A5 5 0 0 1 7 7h2" />
			<path d="M15 7h2a5 5 0 1 1 0 10h-2" />
			<path d="M8 12 L16 12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLink2Icon.displayName = "TablerLink2Icon";
}
