import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWindowIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWindowIcon = React.forwardRef<SVGSVGElement, TablerWindowIconProps>(function TablerWindowIcon(
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
			<path d="M12 3c-3.866 0 -7 3.272 -7 7v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-10c0 -3.728 -3.134 -7 -7 -7z" />
			<path d="M5 13l14 0" />
			<path d="M12 3l0 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWindowIcon.displayName = "TablerWindowIcon";
}
