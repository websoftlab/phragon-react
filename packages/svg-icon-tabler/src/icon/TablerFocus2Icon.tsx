import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFocus2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFocus2Icon = React.forwardRef<SVGSVGElement, TablerFocus2IconProps>(function TablerFocus2Icon(
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
			<path d="M11.5,12a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			<path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
			<path d="M12 3l0 2" />
			<path d="M3 12l2 0" />
			<path d="M12 19l0 2" />
			<path d="M19 12l2 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFocus2Icon.displayName = "TablerFocus2Icon";
}
