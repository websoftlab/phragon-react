import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRedo2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRedo2Icon = React.forwardRef<SVGSVGElement, TablerRedo2IconProps>(function TablerRedo2Icon(
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
			<path d="m15 14 5-5-5-5" />
			<path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRedo2Icon.displayName = "TablerRedo2Icon";
}
