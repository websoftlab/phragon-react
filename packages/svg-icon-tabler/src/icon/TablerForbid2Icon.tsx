import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerForbid2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerForbid2Icon = React.forwardRef<SVGSVGElement, TablerForbid2IconProps>(function TablerForbid2Icon(
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
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M9 15l6 -6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerForbid2Icon.displayName = "TablerForbid2Icon";
}
